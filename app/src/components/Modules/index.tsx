'use client';
import graphqlRequestClient from '@/app/lib/graphqlRequestClient';
import {
    AllLandingPageDocument,
    AllLandingPageQuery,
} from '@/app/lib/__generated/sanity.autogenerated';
import { useQuery } from '@tanstack/react-query';
import NotFound from '../NotFound';
import HeroModule from './Hero';

export default function LandingPage({ slug }: { slug: string }) {
    const { data, isLoading } = useQuery<AllLandingPageQuery>({
        queryKey: ['allLandingPage'],
        queryFn: () => graphqlRequestClient.request(AllLandingPageDocument, { slug }),
        staleTime: 1000 * 60,
    });

    // This was used in past but make calls at each refresh, it's nice because it's typed but not useful.
    // In the above example I need to specify all the type the type query.
    // const { data, isFetching, isLoading } = useAllLandingPageQuery(
    //     graphqlRequestClient,
    //     { slug },
    //     {
    //         queryFn: () => graphqlRequestClient.request(AllLandingPageDocument, { slug }),
    //         staleTime: 1000 * 60,
    //         enabled: true,
    //     },
    // );

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (!data) {
        return <NotFound />;
    }

    const landingPage = data.allLandingPage[0];

    const content: React.ReactElement[] = [];
    landingPage?.modules?.map((module, index) => {
        switch (module?.__typename) {
            case 'Hero':
                content.push(<HeroModule key={index} data={module} />);
                break;
            default:
                break;
        }
    });
    return <div>{content}</div>;
}

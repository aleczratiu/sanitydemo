import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type Color = {
  __typename?: 'Color';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alpha?: Maybe<Scalars['Float']>;
  hex?: Maybe<Scalars['String']>;
  hsl?: Maybe<HslaColor>;
  hsv?: Maybe<HsvaColor>;
  rgb?: Maybe<RgbaColor>;
};

export type ColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alpha?: InputMaybe<FloatFilter>;
  hex?: InputMaybe<StringFilter>;
  hsl?: InputMaybe<HslaColorFilter>;
  hsv?: InputMaybe<HsvaColorFilter>;
  rgb?: InputMaybe<RgbaColorFilter>;
};

export type ColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alpha?: InputMaybe<SortOrder>;
  hex?: InputMaybe<SortOrder>;
  hsl?: InputMaybe<HslaColorSorting>;
  hsv?: InputMaybe<HsvaColorSorting>;
  rgb?: InputMaybe<RgbaColorSorting>;
};

export type CrossDatasetReference = {
  __typename?: 'CrossDatasetReference';
  _dataset?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _projectId?: Maybe<Scalars['String']>;
  _ref?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _weak?: Maybe<Scalars['Boolean']>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _projectId?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _projectId?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type Feature = Document & {
  __typename?: 'Feature';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Array<Maybe<InternationalizedArrayTextValue>>>;
  icon?: Maybe<Image>;
  title?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
};

export type FeatureFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  icon?: InputMaybe<ImageFilter>;
};

export type FeatureSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  icon?: InputMaybe<ImageSorting>;
};

export type Features = Document & {
  __typename?: 'Features';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Array<Maybe<InternationalizedArrayTextValue>>>;
  features?: Maybe<Array<Maybe<Feature>>>;
  theme?: Maybe<Theme>;
  title?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
  unicaseText?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
};

export type FeaturesFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  theme?: InputMaybe<ThemeFilter>;
};

export type FeaturesOrHeroOrTestimonials = Features | Hero | Testimonials;

export type FeaturesSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type Hero = Document & {
  __typename?: 'Hero';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
  image?: Maybe<Image>;
  primaryButtonHref?: Maybe<Scalars['String']>;
  primaryButtonLabel?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
  secondaryButtonHref?: Maybe<Scalars['String']>;
  secondaryButtonLabel?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
  theme?: Maybe<Theme>;
  title?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
  unicaseText?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
};

export type HeroFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  image?: InputMaybe<ImageFilter>;
  primaryButtonHref?: InputMaybe<StringFilter>;
  secondaryButtonHref?: InputMaybe<StringFilter>;
  theme?: InputMaybe<ThemeFilter>;
};

export type HeroSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
  primaryButtonHref?: InputMaybe<SortOrder>;
  secondaryButtonHref?: InputMaybe<SortOrder>;
};

export type HslaColor = {
  __typename?: 'HslaColor';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  a?: Maybe<Scalars['Float']>;
  h?: Maybe<Scalars['Float']>;
  l?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
};

export type HslaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  l?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
};

export type HslaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  l?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
};

export type HsvaColor = {
  __typename?: 'HsvaColor';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  a?: Maybe<Scalars['Float']>;
  h?: Maybe<Scalars['Float']>;
  s?: Maybe<Scalars['Float']>;
  v?: Maybe<Scalars['Float']>;
};

export type HsvaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  h?: InputMaybe<FloatFilter>;
  s?: InputMaybe<FloatFilter>;
  v?: InputMaybe<FloatFilter>;
};

export type HsvaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  h?: InputMaybe<SortOrder>;
  s?: InputMaybe<SortOrder>;
  v?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']>;
};

export type InternationalizedArrayReferenceValue = {
  __typename?: 'InternationalizedArrayReferenceValue';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  value?: Maybe<TFeature>;
};

export type InternationalizedArrayReferenceValueFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  value?: InputMaybe<TFeatureFilter>;
};

export type InternationalizedArrayReferenceValueSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type InternationalizedArrayStringValue = {
  __typename?: 'InternationalizedArrayStringValue';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type InternationalizedArrayStringValueFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type InternationalizedArrayStringValueSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type InternationalizedArrayTextValue = {
  __typename?: 'InternationalizedArrayTextValue';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type InternationalizedArrayTextValueFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  value?: InputMaybe<StringFilter>;
};

export type InternationalizedArrayTextValueSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type LandingPage = Document & {
  __typename?: 'LandingPage';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  modules?: Maybe<Array<Maybe<FeaturesOrHeroOrTestimonials>>>;
  seo?: Maybe<Seo>;
  slug?: Maybe<Slug>;
  theme?: Maybe<Theme>;
  title?: Maybe<Scalars['String']>;
};

export type LandingPageFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  seo?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  theme?: InputMaybe<ThemeFilter>;
  title?: InputMaybe<StringFilter>;
};

export type LandingPageSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  seo?: InputMaybe<SeoSorting>;
  slug?: InputMaybe<SlugSorting>;
  title?: InputMaybe<SortOrder>;
};

export type RgbaColor = {
  __typename?: 'RgbaColor';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  a?: Maybe<Scalars['Float']>;
  b?: Maybe<Scalars['Float']>;
  g?: Maybe<Scalars['Float']>;
  r?: Maybe<Scalars['Float']>;
};

export type RgbaColorFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  a?: InputMaybe<FloatFilter>;
  b?: InputMaybe<FloatFilter>;
  g?: InputMaybe<FloatFilter>;
  r?: InputMaybe<FloatFilter>;
};

export type RgbaColorSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  a?: InputMaybe<SortOrder>;
  b?: InputMaybe<SortOrder>;
  g?: InputMaybe<SortOrder>;
  r?: InputMaybe<SortOrder>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Document?: Maybe<Document>;
  Feature?: Maybe<Feature>;
  Features?: Maybe<Features>;
  Hero?: Maybe<Hero>;
  LandingPage?: Maybe<LandingPage>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  TFeature?: Maybe<TFeature>;
  Testimonials?: Maybe<Testimonials>;
  Theme?: Maybe<Theme>;
  TranslationMetadata?: Maybe<TranslationMetadata>;
  allDocument: Array<Document>;
  allFeature: Array<Feature>;
  allFeatures: Array<Features>;
  allHero: Array<Hero>;
  allLandingPage: Array<LandingPage>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allTFeature: Array<TFeature>;
  allTestimonials: Array<Testimonials>;
  allTheme: Array<Theme>;
  allTranslationMetadata: Array<TranslationMetadata>;
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryFeatureArgs = {
  id: Scalars['ID'];
};


export type RootQueryFeaturesArgs = {
  id: Scalars['ID'];
};


export type RootQueryHeroArgs = {
  id: Scalars['ID'];
};


export type RootQueryLandingPageArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryTFeatureArgs = {
  id: Scalars['ID'];
};


export type RootQueryTestimonialsArgs = {
  id: Scalars['ID'];
};


export type RootQueryThemeArgs = {
  id: Scalars['ID'];
};


export type RootQueryTranslationMetadataArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};


export type RootQueryAllFeatureArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FeatureSorting>>;
  where?: InputMaybe<FeatureFilter>;
};


export type RootQueryAllFeaturesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FeaturesSorting>>;
  where?: InputMaybe<FeaturesFilter>;
};


export type RootQueryAllHeroArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HeroSorting>>;
  where?: InputMaybe<HeroFilter>;
};


export type RootQueryAllLandingPageArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<LandingPageSorting>>;
  where?: InputMaybe<LandingPageFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};


export type RootQueryAllTFeatureArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TFeatureSorting>>;
  where?: InputMaybe<TFeatureFilter>;
};


export type RootQueryAllTestimonialsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TestimonialsSorting>>;
  where?: InputMaybe<TestimonialsFilter>;
};


export type RootQueryAllThemeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ThemeSorting>>;
  where?: InputMaybe<ThemeFilter>;
};


export type RootQueryAllTranslationMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TranslationMetadataSorting>>;
  where?: InputMaybe<TranslationMetadataFilter>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']>;
};

export type Seo = {
  __typename?: 'Seo';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  description?: Maybe<Array<Maybe<InternationalizedArrayTextValue>>>;
  image?: Maybe<Image>;
  title?: Maybe<Array<Maybe<InternationalizedArrayStringValue>>>;
};

export type SeoFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
};

export type SeoSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
  source?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
  source?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Checks if the value is defined. */
  is_defined?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<Scalars['String']>>;
};

export type TFeature = Document & {
  __typename?: 'TFeature';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  features?: Maybe<Array<Maybe<Feature>>>;
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  unicaseText?: Maybe<Scalars['String']>;
};

export type TFeatureFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  description?: InputMaybe<StringFilter>;
  language?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  unicaseText?: InputMaybe<StringFilter>;
};

export type TFeatureSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  language?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  unicaseText?: InputMaybe<SortOrder>;
};

export type Testimonial = {
  __typename?: 'Testimonial';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  image?: Maybe<Image>;
  quote?: Maybe<Array<Maybe<InternationalizedArrayTextValue>>>;
};

export type TestimonialFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  author?: InputMaybe<StringFilter>;
  domain?: InputMaybe<StringFilter>;
  image?: InputMaybe<ImageFilter>;
};

export type TestimonialSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  author?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  image?: InputMaybe<ImageSorting>;
};

export type Testimonials = Document & {
  __typename?: 'Testimonials';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Just a name to identify this testimonial */
  name?: Maybe<Scalars['String']>;
  testimonials?: Maybe<Array<Maybe<Testimonial>>>;
  theme?: Maybe<Theme>;
};

export type TestimonialsFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  theme?: InputMaybe<ThemeFilter>;
};

export type TestimonialsSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type Theme = Document & {
  __typename?: 'Theme';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  accentColor?: Maybe<Color>;
  backgroundColor?: Maybe<Color>;
  name?: Maybe<Scalars['String']>;
  textColor?: Maybe<Color>;
};

export type ThemeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  accentColor?: InputMaybe<ColorFilter>;
  backgroundColor?: InputMaybe<ColorFilter>;
  name?: InputMaybe<StringFilter>;
  textColor?: InputMaybe<ColorFilter>;
};

export type ThemeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  accentColor?: InputMaybe<ColorSorting>;
  backgroundColor?: InputMaybe<ColorSorting>;
  name?: InputMaybe<SortOrder>;
  textColor?: InputMaybe<ColorSorting>;
};

export type TranslationMetadata = Document & {
  __typename?: 'TranslationMetadata';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  schemaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  slug?: Maybe<Slug>;
  translations?: Maybe<Array<Maybe<InternationalizedArrayReferenceValue>>>;
};

export type TranslationMetadataFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type TranslationMetadataSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type AllLandingPageQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type AllLandingPageQuery = { __typename?: 'RootQuery', allLandingPage: Array<{ __typename?: 'LandingPage', title?: string | null, slug?: { __typename?: 'Slug', current?: string | null, source?: string | null } | null, modules?: Array<{ __typename: 'Features', title?: Array<{ __typename?: 'InternationalizedArrayStringValue', value?: string | null } | null> | null, features?: Array<{ __typename?: 'Feature', title?: Array<{ __typename?: 'InternationalizedArrayStringValue', value?: string | null } | null> | null, icon?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null } | null> | null } | { __typename: 'Hero', _type?: string | null, title?: Array<{ __typename?: 'InternationalizedArrayStringValue', value?: string | null } | null> | null } | { __typename: 'Testimonials' } | null> | null }> };


export const AllLandingPageDocument = `
    query allLandingPage($slug: String!) {
  allLandingPage(where: {slug: {current: {eq: $slug}}}) {
    title
    slug {
      current
      source
    }
    modules {
      __typename
      ... on Hero {
        _type
        title {
          value
        }
      }
      ... on Features {
        title {
          value
        }
        features {
          title {
            value
          }
          icon {
            asset {
              url
            }
          }
        }
      }
    }
  }
}
    `;
export const useAllLandingPageQuery = <
      TData = AllLandingPageQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: AllLandingPageQueryVariables,
      options?: UseQueryOptions<AllLandingPageQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<AllLandingPageQuery, TError, TData>(
      ['allLandingPage', variables],
      fetcher<AllLandingPageQuery, AllLandingPageQueryVariables>(client, AllLandingPageDocument, variables, headers),
      options
    );
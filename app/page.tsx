import React from 'react';
import Link from 'next/link';

export default function Home() {
    return (
        <div>
            Available landing pages:
            <ul>
                <li>
                    <Link href="/studio">Studio</Link>
                </li>
            </ul>
        </div>
    );
}

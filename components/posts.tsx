"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from "next/navigation";
import Fuse from "fuse.js";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { blogs as allBlogs } from "#site/content";
import { formatDate } from "@/lib/utils";

const Posts = () => {
    const searchParams = useSearchParams();
    const s = searchParams?.get("s");
    const [filteredPosts, setFilteredPosts] = useState(allBlogs);

    useEffect(() => {
        const blogPosts = allBlogs
            .filter((blog) => blog.published)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        if (s) {
            // const filtered = blogPosts.filter(
            //   (post) =>
            //     post.title.toLowerCase().includes(s.toLowerCase()) ||
            //     post.description.toLowerCase().includes(s.toLowerCase()) ||
            //     post.body.toLowerCase().includes(s.toLowerCase())
            // );
            // setFilteredPosts(filtered);
            const fuse = new Fuse(blogPosts, {
                keys: ["title", "description", "body"],
                findAllMatches: true,
                ignoreLocation: true,
                threshold: 0.3,
            });

            const results = fuse.search(s);
            setFilteredPosts(results.map((result) => result.item));
        } else {
            setFilteredPosts(blogPosts);
        }
    }, [s]);

    return (
        <>
            {filteredPosts.map((post, index) => (
                <Link
                    href={`/${post.slug}`} // Add slug to your post data
                    key={post.title}
                    className="transition-transform hover:scale-105"
                >
                    <Card key={post.title} className="bg-zinc-900 border-zinc-800 overflow-hidden min-h-full">
                        <div className="aspect-video relative">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority={index === 0} // Load first image immediately
                            />
                        </div>
                        <CardContent className="pt-6">
                            <h3 className="text-xl font-semibold mb-2 text-white">{post.title}</h3>
                            <p className="text-sm text-zinc-500 mb-2">{formatDate(post.date)}</p>
                            <p className="text-zinc-400">{post.description}</p>
                        </CardContent>
                    </Card>
                </Link>
            ))}
        </>
    );
};

export default Posts;
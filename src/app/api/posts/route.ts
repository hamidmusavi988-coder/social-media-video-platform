import { NextResponse } from 'next/server';
import { db } from '@/db';
import { posts } from '@/db/schema';
import { desc } from 'drizzle-orm';

export async function GET() {
  try {
    const allPosts = await db.select().from(posts).orderBy(desc(posts.createdAt));
    return NextResponse.json(allPosts);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { url, caption, username } = await request.json();
    const newPost = await db.insert(posts).values({
      url,
      caption: caption || '',
      username: username || 'hamid.user',
      likes: 0,
    }).returning();

    return NextResponse.json(newPost[0]);
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { getAuth } from '@clerk/nextjs/server';

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ message: 'Unautorized' }, { status: 401 });
    }
    let existUser = await db.user.findUnique({
      where: {
        id: userId,
      },
      include: { links: true },
    });
    if (!existUser) {
      existUser = await db.user.create({
        data: {
          id: userId,
          name: 'User',
          username: `user_${Date.now()}`,
          links: {
            create: [],
          },
        },
        include: { links: true },
      });
    }
    return NextResponse.json(existUser);
  } catch (error) {
    console.error('[GET_USER_FIRST_LOGIN]', error);
    return NextResponse.json(
      {
        message: 'Error fetching user',
      },
      { status: 500 }
    );
  }
}

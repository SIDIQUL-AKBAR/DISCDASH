import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Configurations
  const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
  const CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET;
  const REDIRECT_URI = process.env.DISCORD_REDIRECT_URI;

  try {
    // 1. Exchange access token code
    const tokenResponse = await fetch('https://discord.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: REDIRECT_URI,
      }),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const tokens = await tokenResponse.json();

    if (tokens.error) throw new Error(tokens.error_description);

    // 2. Query target identity profile data
    const userResponse = await fetch('https://discord.com/api/users/@me', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    const userData = await userResponse.json();

    // 3. Build state profile session string parameters safely
    const response = NextResponse.redirect(new URL('/dashboard', request.url));
    
    // Store access token encrypted or simply pass safe payload data for interface use 
    response.cookies.set('user_avatar', `https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`, { path: '/' });
    response.cookies.set('user_name', userData.username, { path: '/' });
    
    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Authentication routine failed' }, { status: 500 });
  }
}

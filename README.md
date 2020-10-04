# Ouroboros

Ouroboros repository

[bot link](https://discord.com/api/oauth2/authorize?client_id=760217238425829387&permissions=8&scope=bot)

# For devs

## First time install

    $> docker-compose up -d
    $> npm install
	$> npx prisma generate

## New migration (model editing)

Once you have done a modification on `schema.prisma` execute these commands:

    $> npx prisma2 migrate save --experimental
    $> npx prisma2 migrate up --experimental
    $> npx prisma generate

:warning: don't forget to commit and push your changes.
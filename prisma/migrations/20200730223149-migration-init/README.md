# Migration `20200730223149-migration-init`

This migration has been generated by mathis di mascio at 7/30/2020, 10:31:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" SERIAL,
"discord_id" text  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Balance" (
"id" SERIAL,
"realm" text  NOT NULL ,
"userId" integer  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Character" (
"id" SERIAL,
"name" text  NOT NULL ,
"server" text  NOT NULL ,
"wow_id" text  NOT NULL ,
"class" text  NOT NULL ,
"userId" integer  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
PRIMARY KEY ("id"))

CREATE TABLE "public"."Role" (
"id" SERIAL,
"heal" integer  NOT NULL DEFAULT 0,
"tank" integer  NOT NULL DEFAULT 0,
"dps" integer  NOT NULL DEFAULT 0,
"characterId" integer  NOT NULL ,
"createdAt" timestamp(3)  NOT NULL DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)  NOT NULL ,
PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.discord_id" ON "public"."User"("discord_id")

CREATE UNIQUE INDEX "Role_characterId" ON "public"."Role"("characterId")

ALTER TABLE "public"."Balance" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Character" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Role" ADD FOREIGN KEY ("characterId")REFERENCES "public"."Character"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200730223149-migration-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,53 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id            Int         @default(autoincrement()) @id
+  discord_id    String      @unique
+  characters    Character[]
+  balances      Balance[]
+  createdAt     DateTime    @default(now())
+  updatedAt     DateTime    @updatedAt
+}
+
+model Balance {
+    id             Int          @default(autoincrement()) @id
+    realm          String
+    user           User         @relation(fields:[userId], references:[id])
+    userId         Int
+    createdAt      DateTime     @default(now())
+    updatedAt      DateTime     @updatedAt
+}
+
+model Character {
+    id             Int          @default(autoincrement()) @id
+    name           String
+    server         String
+    wow_id         String
+    class          String
+    user           User         @relation(fields:[userId], references:[id])
+    userId         Int
+    role           Role
+    createdAt      DateTime     @default(now())
+    updatedAt      DateTime     @updatedAt
+}
+
+model Role {
+    id          Int         @default(autoincrement()) @id
+    heal        Int         @default(0)
+    tank        Int         @default(0)
+    dps         Int         @default(0)
+    character   Character   @relation(fields:[characterId], references:[id])
+    characterId Int
+    createdAt   DateTime    @default(now())
+    updatedAt   DateTime    @updatedAt
+}
```



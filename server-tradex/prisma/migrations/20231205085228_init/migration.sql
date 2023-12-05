-- CreateTable
CREATE TABLE "lu_user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" TEXT,
    "password" VARCHAR(255) NOT NULL,
    "gtoken" TEXT,

    CONSTRAINT "lu_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lu_comment" (
    "id" SERIAL NOT NULL,
    "userid" TEXT,
    "comment" TEXT,
    "upvote" INTEGER,
    "downvote" INTEGER,
    "coinid" TEXT,
    "datecreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lu_comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "pk_user_id" ON "lu_user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "lu_user_email_key" ON "lu_user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pk_comment_id" ON "lu_comment"("id");

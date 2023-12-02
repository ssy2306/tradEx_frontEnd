-- CreateTable
CREATE TABLE `lu_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `password` VARCHAR(255) NOT NULL,
    `gtoken` VARCHAR(191) NULL,

    UNIQUE INDEX `pk_user_id`(`id`),
    UNIQUE INDEX `lu_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lu_comment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userid` VARCHAR(191) NULL,
    `comment` VARCHAR(191) NULL,
    `upvote` INTEGER NULL,
    `downvote` INTEGER NULL,
    `coinid` VARCHAR(191) NULL,
    `datecreated` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `pk_comment_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - The primary key for the `tests` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pk_test_id` on the `tests` table. All the data in the column will be lost.
  - You are about to drop the `answer_math` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `question_math` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `test_response_math` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `fk_user_id` to the `Tests` table without a default value. This is not possible if the table is not empty.
  - Added the required column `test_id` to the `Tests` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `answer_math` DROP FOREIGN KEY `qs_ans_map`;

-- DropForeignKey
ALTER TABLE `test_response_math` DROP FOREIGN KEY `qs_ans_response`;

-- DropForeignKey
ALTER TABLE `test_response_math` DROP FOREIGN KEY `user_response_id`;

-- DropForeignKey
ALTER TABLE `test_response_math` DROP FOREIGN KEY `user_response_math_correct`;

-- AlterTable
ALTER TABLE `tests` DROP PRIMARY KEY,
    DROP COLUMN `pk_test_id`,
    ADD COLUMN `fk_user_id` INTEGER NOT NULL,
    ADD COLUMN `test_given` ENUM('yes', 'no') NOT NULL DEFAULT 'no',
    ADD COLUMN `test_id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`test_id`);

-- DropTable
DROP TABLE `answer_math`;

-- DropTable
DROP TABLE `question_math`;

-- DropTable
DROP TABLE `test_response_math`;

-- CreateTable
CREATE TABLE `question` (
    `pk_question_id` INTEGER NOT NULL AUTO_INCREMENT,
    `question` VARCHAR(191) NOT NULL,
    `answer_option` INTEGER NULL,

    PRIMARY KEY (`pk_question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `answer` (
    `answer_id` INTEGER NOT NULL,
    `correctness` INTEGER NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `fk_question` INTEGER NOT NULL,

    PRIMARY KEY (`answer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `test_response` (
    `pk_test_response_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_question_id` INTEGER NOT NULL,
    `fk_user_id` INTEGER NOT NULL,
    `user_answer_id` INTEGER NOT NULL,
    `fk_answer_id` INTEGER NOT NULL,

    UNIQUE INDEX `test_response_pk_test_response_id_key`(`pk_test_response_id`),
    PRIMARY KEY (`pk_test_response_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tests` ADD CONSTRAINT `test_account_id` FOREIGN KEY (`fk_user_id`) REFERENCES `lu_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `answer` ADD CONSTRAINT `qs_ans_map` FOREIGN KEY (`fk_question`) REFERENCES `question`(`pk_question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `test_response` ADD CONSTRAINT `user_response_correct` FOREIGN KEY (`fk_answer_id`) REFERENCES `answer`(`answer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `test_response` ADD CONSTRAINT `user_response_id` FOREIGN KEY (`fk_user_id`) REFERENCES `lu_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `test_response` ADD CONSTRAINT `qs_ans_response` FOREIGN KEY (`fk_answer_id`) REFERENCES `question`(`pk_question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `fk_answer_id` on the `test_response` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `test_response` DROP FOREIGN KEY `user_response_correct`;

-- AlterTable
ALTER TABLE `test_response` DROP COLUMN `fk_answer_id`;

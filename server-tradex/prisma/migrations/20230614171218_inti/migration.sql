/*
  Warnings:

  - You are about to drop the column `test_given` on the `tests` table. All the data in the column will be lost.
  - Added the required column `fk_test_id` to the `map_question_answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `map_question_answer` ADD COLUMN `fk_test_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `tests` DROP COLUMN `test_given`;

-- AddForeignKey
ALTER TABLE `map_question_answer` ADD CONSTRAINT `map_question_answer_fk_test_id_fkey` FOREIGN KEY (`fk_test_id`) REFERENCES `Tests`(`test_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

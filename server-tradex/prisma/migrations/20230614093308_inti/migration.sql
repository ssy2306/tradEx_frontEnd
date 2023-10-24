-- DropForeignKey
ALTER TABLE `test_response` DROP FOREIGN KEY `qs_ans_response`;

-- AlterTable
ALTER TABLE `test_response` MODIFY `fk_answer_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `test_response` ADD CONSTRAINT `test_response_fk_question_id_fkey` FOREIGN KEY (`fk_question_id`) REFERENCES `question`(`pk_question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

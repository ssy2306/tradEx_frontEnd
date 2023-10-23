-- AlterTable
ALTER TABLE `question` ADD COLUMN `fk_test_id` INTEGER NULL,
    MODIFY `answer_option` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `question` ADD CONSTRAINT `test_question_id` FOREIGN KEY (`fk_test_id`) REFERENCES `Tests`(`test_id`) ON DELETE CASCADE ON UPDATE CASCADE;

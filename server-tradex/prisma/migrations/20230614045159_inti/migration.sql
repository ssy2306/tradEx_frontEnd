-- CreateTable
CREATE TABLE `map_question_answer` (
    `fk_question_id` INTEGER NOT NULL,
    `fk_answer_id` INTEGER NOT NULL,

    PRIMARY KEY (`fk_question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `map_question_answer` ADD CONSTRAINT `map_qs` FOREIGN KEY (`fk_question_id`) REFERENCES `question`(`pk_question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `map_question_answer` ADD CONSTRAINT `map_ans` FOREIGN KEY (`fk_answer_id`) REFERENCES `answer`(`answer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

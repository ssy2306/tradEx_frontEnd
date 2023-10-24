-- CreateTable
CREATE TABLE `lu_user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `phone_number` VARCHAR(191) NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `pk_user_id`(`id`),
    UNIQUE INDEX `lu_user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tests` (
    `pk_test_id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`pk_test_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_math` (
    `pk_question_id` INTEGER NOT NULL AUTO_INCREMENT,
    `answer_id` INTEGER NULL,

    PRIMARY KEY (`pk_question_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `answer_math` (
    `pk_answer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `correctness` INTEGER NOT NULL,
    `fk_question_math` INTEGER NOT NULL,

    PRIMARY KEY (`pk_answer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `test_response_math` (
    `pk_test_response_id` INTEGER NOT NULL AUTO_INCREMENT,
    `fk_question_math_id` INTEGER NOT NULL,
    `fk_user_id` INTEGER NOT NULL,
    `user_answer_id` INTEGER NOT NULL,
    `fk_answer_math_id` INTEGER NOT NULL,

    UNIQUE INDEX `test_response_math_pk_test_response_id_key`(`pk_test_response_id`),
    PRIMARY KEY (`pk_test_response_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `answer_math` ADD CONSTRAINT `qs_ans_map` FOREIGN KEY (`fk_question_math`) REFERENCES `question_math`(`pk_question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `test_response_math` ADD CONSTRAINT `user_response_math_correct` FOREIGN KEY (`fk_answer_math_id`) REFERENCES `answer_math`(`pk_answer_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `test_response_math` ADD CONSTRAINT `user_response_id` FOREIGN KEY (`fk_user_id`) REFERENCES `lu_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `test_response_math` ADD CONSTRAINT `qs_ans_response` FOREIGN KEY (`fk_answer_math_id`) REFERENCES `question_math`(`pk_question_id`) ON DELETE CASCADE ON UPDATE CASCADE;

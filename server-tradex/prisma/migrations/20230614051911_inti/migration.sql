-- CreateTable
CREATE TABLE `user_score` (
    `fk_user_id` INTEGER NOT NULL,
    `score` DECIMAL(65, 30) NOT NULL,
    `test_id` INTEGER NOT NULL,

    PRIMARY KEY (`fk_user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `user_score` ADD CONSTRAINT `test_map_score` FOREIGN KEY (`test_id`) REFERENCES `Tests`(`test_id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_score` ADD CONSTRAINT `user_score_id` FOREIGN KEY (`fk_user_id`) REFERENCES `lu_user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `status` to the `JokeCounter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JokeCounter" ADD COLUMN     "status" BOOLEAN NOT NULL;

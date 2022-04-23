/*
  Warnings:

  - Made the column `authUserId` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "authUserId" SET NOT NULL;

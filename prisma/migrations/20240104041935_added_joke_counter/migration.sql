-- CreateTable
CREATE TABLE "JokeCounter" (
    "id" SERIAL NOT NULL,
    "sessionId" TEXT NOT NULL,
    "jokeId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JokeCounter_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JokeCounter_sessionId_key" ON "JokeCounter"("sessionId");

-- AddForeignKey
ALTER TABLE "JokeCounter" ADD CONSTRAINT "JokeCounter_jokeId_fkey" FOREIGN KEY ("jokeId") REFERENCES "Joke"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateTable
CREATE TABLE "StockMarket" (
    "id" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "change" INTEGER NOT NULL,

    CONSTRAINT "StockMarket_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StockMarket_symbol_key" ON "StockMarket"("symbol");

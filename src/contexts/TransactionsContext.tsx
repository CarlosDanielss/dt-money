import { ReactNode, useEffect, useState, useCallback } from "react";
import { createContext } from "use-context-selector";

import { api } from "../lib/axios";

interface TransactionType {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionsType {
  description: string;
  price: number;
  category: string;
  type: "income" | "outcome";
}

interface TransactionContextType {
  transactions: TransactionType[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransactions: (data: CreateTransactionsType) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
  children: ReactNode;
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("transactions", {
      params: {
        q: query,
      },
    });

    setTransactions(response.data);
  }, []);

  const createTransactions = useCallback(
    async (data: CreateTransactionsType) => {
      const { description, category, price, type } = data;

      const response = await api.post("transactions", {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      });

      setTransactions((prev) => [...prev, response.data]);
    },
    []
  );

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransactions }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}

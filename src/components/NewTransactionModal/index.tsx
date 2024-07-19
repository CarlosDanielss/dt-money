import { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { TransactionsContext } from "../../contexts/TransactionsContext";

import {
  TransactionType,
  CloseButton,
  Content,
  Overlay,
  TransactionTypeButton,
} from "./styles";

const newTransactionsFormSchema = z.object({
  description: z.string(),
  price: z.coerce.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type newTransactionsFormType = z.infer<typeof newTransactionsFormSchema>;

export function NewTransactionModal() {
  const { createTransactions } = useContext(TransactionsContext);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<newTransactionsFormType>({
    resolver: zodResolver(newTransactionsFormSchema),
  });

  async function handleCreateNewTransaction(data: newTransactionsFormType) {
    const { description, category, price, type } = data;

    await createTransactions({
      description,
      category,
      price,
      type,
    });

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            {...register("description")}
            required
          />
          <input
            type="number"
            placeholder="Preço"
            {...register("price")}
            required
          />
          <input
            type="text"
            placeholder="Categoria"
            {...register("category")}
            required
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton $variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>

                  <TransactionTypeButton $variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}

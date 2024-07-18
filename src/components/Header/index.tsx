import * as Dialog from "@radix-ui/react-dialog";

import { NewTransactionModal } from "../NewTransactionModal";

import logo from "../../assets/logo.svg";

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova transação</NewTransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}

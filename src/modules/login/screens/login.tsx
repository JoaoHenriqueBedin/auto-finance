import logo from "../../../assets/logo.svg";
import alvo from "../../../assets/alvo.svg";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Login() {

  const [password, setPassword] = useState("");


  return (
    <div className="flex flex-col items-center">
      <div className="flex md:mt-10 mt-40">
        <img src={logo} alt="logo" />
      </div>

      <div className="flex flex-col w-full items-start md:w-[30%] md:items-center md:mt-2 px-14 mt-10">
        <p className="text-center text-base font-bold mt-10 flex items-center justify-center gap-2">
          Acesse sua conta
          <img src={alvo} alt="Ícone" />
        </p>

        <div className="flex flex-col mt-4 w-full py-2">
          <label className="text-sm">Email</label>
          <Input type="email" placeholder="Digite seu email"></Input>
        </div>

        <div className="flex flex-col mt-4 w-full py-2">
          <label className="text-sm">Senha</label>
          <PasswordInput 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-col mt-4 w-full py-2">
          <Button>ENTRAR</Button>
        </div>

        <div className="flex flex-col items-center mt-4 w-full py-4">
          <p>Desenvolvido por</p>
          <img src={logo} alt="logo menor" className="w-20 h-20" />
        </div>

      </div>
    </div>
  );
}

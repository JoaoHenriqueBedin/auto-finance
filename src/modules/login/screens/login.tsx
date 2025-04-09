import logo from "../../../assets/logo.svg";
import alvo from "../../../assets/alvo.svg";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex md:mt-10 mt-40">
        <img src={logo} alt="logo" />
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full items-start md:w-[30%] md:items-center md:mt-2 px-14 mt-10"
      >
        <p className="text-center text-base font-bold mt-10 flex items-center justify-center gap-2">
          Acesse sua conta
          <img src={alvo} alt="Ícone" />
        </p>

        <div className="flex flex-col mt-4 w-full py-2">
          <label className="text-sm">Email</label>
          <Input
            type="email"
            placeholder="Digite seu email"
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de e-mail inválido",
              },
            })}
          />
          {errors.email && (
            <span className="text-sm text-red-500 mt-1">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="flex flex-col mt-4 w-full py-2">
          <label className="text-sm">Senha</label>
          <PasswordInput
            {...register("password", {
              required: "A senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            })}
          />
          {errors.password && (
            <span className="text-sm text-red-500 mt-1">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="flex flex-col mt-4 w-full py-2">
          <Button type="submit">ENTRAR</Button>
        </div>

        <div className="flex flex-col items-center mt-4 w-full py-4">
          <p>Desenvolvido por</p>
          <img src={logo} alt="logo menor" className="w-20 h-20" />
        </div>
      </form>
    </div>
  );
}

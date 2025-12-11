//punto 7, validación de inputs
import { z } from "zod";

export const authSchema = z.object({
  email: z.string().email("Formato de email inválido"), // Valida formato de email del usuario
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"), // Valida longitud mínima para la contraseña del usuario
});
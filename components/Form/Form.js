import { Field, Input, Label, Textarea } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";
import { ButtonGroup } from "@components/Button";

export const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [projectDetails, setProjectDetails] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const maxChars = 500;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("message", projectDetails);

        try {
            const response = await fetch("https://formspree.io/f/mnqynzya", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json"
                }
            });

            if (response.ok) {
                setIsSent(true);
                setName("");
                setProjectDetails("");
            } else {
                setErrorMessage(
                    "Ocurrió un error. Por favor, inténtalo de nuevo."
                );
            }
        } catch (error) {
            setErrorMessage("Ocurrió un error. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div className="w-full max-w-md px-4">
            <form onSubmit={handleSubmit}>
                <Field>
                    {/* Name */}
                    <Label className="text-sm/6 font-medium">Nombre</Label>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={clsx(
                            "mt-2 mb-3 block w-full rounded-lg border-none  py-1.5 px-3 text-sm/6",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                    />
                    {/* Email */}
                    <Label className="text-sm/6 font-medium">Email</Label>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={clsx(
                            "mt-2 mb-3 block w-full rounded-lg border-none  py-1.5 px-3 text-sm/6",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                    />

                    {/* Phone */}
                    <Label className="text-sm/6 font-medium">Teléfono</Label>
                    <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={clsx(
                            "mt-2 mb-3 block w-full rounded-lg border-none  py-1.5 px-3 text-sm/6",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                    />

                    <Label className="mt-4 text-sm/6 font-medium">
                        Cuéntanos más sobre tu espacio para que podamos
                        asesorarte.
                    </Label>
                    <Textarea
                        placeholder="Explica los detalles del proyecto (máximo 300 caracteres)"
                        className={clsx(
                            "mt-2 mb-3 block w-full resize-none rounded-lg border-none py-1.5 px-3 text-sm/6",
                            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                        )}
                        rows={3}
                        value={projectDetails}
                        onChange={(e) => setProjectDetails(e.target.value)}
                    />
                    <p className="text-sm mt-2">
                        {projectDetails.length}/{maxChars} caracteres
                    </p>
                    <button
                        type="submit"
                        className="mt-4 w-full py-2 text-slate-800 bg-amber-200	 rounded-lg hover:bg-yellow-500	 transition"
                    >
                        Enviar
                    </button>
                    {isSent && (
                        <p className="mt-2 text-green-500">
                            Gracias por tu mensaje! Entraremos en contacto
                            contigo a la brevedad
                        </p>
                    )}
                    {errorMessage && (
                        <p className="mt-2 text-red-500">{errorMessage}</p>
                    )}
                </Field>

                {/* Privacy Policy Checkbox */}
                <div className="mt-4">
                    <label className="flex items-start space-x-2 text-sm">
                        <input
                            type="checkbox"
                            required
                            className="form-checkbox h-4 w-4 text-primary-600 transition duration-150 ease-in-out"
                        />
                        <span>
                            He leído y acepto el{" "}
                            <a
                                href="/aviso-legal"
                                className="text-blue-600 underline"
                            >
                                Aviso Legal
                            </a>
                            , la{" "}
                            <a
                                href="/politica-de-privacidad"
                                className="text-blue-600 underline"
                            >
                                Política de Privacidad
                            </a>{" "}
                            y la{" "}
                            <a
                                href="/politica-de-cookies"
                                className="text-blue-600 underline"
                            >
                                Política de Cookies
                            </a>
                            .
                        </span>
                    </label>
                </div>
            </form>
        </div>
    );
};

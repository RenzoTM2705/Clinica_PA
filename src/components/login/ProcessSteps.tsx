import { processSteps } from "../../data/processSteps";

interface Props {
    progress: number;
}

const ProcessSteps = ({ progress }: Props) => {
    return (
        <div className="flex justify-between w-full">
            {processSteps.map((step, index) => (
                <div
                    key={step}
                    className={`
                        text-xs
                        font-semibold
                        uppercase
                        ${progress >= index * 33
                            ? "text-[#003f87]"
                            : "text-slate-400"
                        }
                    `}
                >
                    {step}
                </div>
            ))}
        </div>
    );
};

export default ProcessSteps;
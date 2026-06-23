interface FeatureItemProps {
    title: string;
    description: string;
    icon: string;
}

const FeatureItem = ({
    title,
    description,
    icon,
}: FeatureItemProps) => {
    return (
        <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-green-300 flex items-center justify-center">
                <span><img
                    src={icon}
                    alt={title}
                    className="w-5 h-5 object-contain"
                /></span>
            </div>

            <div>
                <h4 className="font-semibold text-[#003f87]">
                    {title}
                </h4>

                <p className="text-sm text-slate-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureItem;
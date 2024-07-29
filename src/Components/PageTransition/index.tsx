import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface TransitionLinkProps {
    children: React.ReactNode;
    to: string;
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({ children, to }) => {
    const navigate = useNavigate();

    const handleTransition = () => {
        navigate(to, { state: { transition: true } });
    };

    return (
        <motion.a whileTap={{ scale: 0.9 }} onTap={handleTransition} className="cursor-pointer">
            {children}
        </motion.a>
    );
};

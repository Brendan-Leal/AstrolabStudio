import { createContext, RefObject } from 'react';

type FooterContextType = null | RefObject<HTMLFormElement>;

const FooterContext = createContext<FooterContextType>(null);

export default FooterContext;

import './mylabel.css';
import { AllCaps } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamaño de la etiqueta
   */
  size: 'normal'|'h1'|'h2'|'h3'; 
  /**
   * Si quiere todo capitalizado
   */  
  allCaps?: boolean;
  /**
   * Colores del label
   */  
  color?: 'primary' | 'secondary' | 'tertiary';
  /**
   * Colores personalizado de la fuente
   */
  fontColor?: string;
  /**
   * Colores personalizado del Background
   */
   backgroundColor?: string;  
}

export const MyLabel = ({ 
    allCaps =  false,
    color   = 'primary', 
    label   = 'No Label', 
    size    = 'normal', 
    fontColor,
    backgroundColor = 'transparent'
  }: MyLabelProps) => {
  return (
    <span 
       className= { `label ${ size } text-${color}` }
       style={{ color: fontColor, backgroundColor }}
    >
       { (allCaps) ? label.toUpperCase() : label }
    </span>
  )
}

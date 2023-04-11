import styles from './Avatar.module.css';

// harborder como padrão é true
export function Avatar({ hasBorder = true, src }) {

  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      src={src} 
    />

  )
}
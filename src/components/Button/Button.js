import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    text = false,
    small = false,
    large = false,
    rounded = false,
    disabled = false,
    children,
    leftIcon,
    rightIcon,
    classNames,
    ...passProps
}) {
    let Tag = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Tag = Link;
    } else if (href) {
        props.href = href;
        Tag = 'a';
    }
    const classes = cx('wrapper', {
        [classNames]: classNames,
        primary,
        outline,
        text,
        rounded,
        small,
        large,
        disabled,
    });

    // delete event when button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    return (
        <Tag className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Tag>
    );
}

export default Button;

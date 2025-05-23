import React from "react";
import './style.scss';
import { $currentBackground } from "@google/model-viewer/lib/features/environment";

const ThemeIcon = ({ size = 38, color = 'var(--icon-fill)', icon = 'contrast' }) => (
    <span
        className="material-symbols-outlined"
        style={{ fontSize: size, color }}
    >
        {icon}
    </span>
);

export default ThemeIcon;
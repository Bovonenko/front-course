import { classNames } from "shared/lib/classNames/classNames";
import { MyLoaderWC } from "shared/WC/Loader/my-loader";

import cls from "./index.module.scss";

export const PageLoader = () => (
	<div className={classNames(cls.PageLoader)}>
		<MyLoaderWC />
	</div>
);

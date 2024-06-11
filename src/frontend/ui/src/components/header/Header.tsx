import Link from 'next/link';
import { appName } from '../../helpers/SharedStrings';

interface Props {}

const textClasses = 'text-gray-100 font-semibold flex items-center justify-center h-full hover:no-underline';

const Header = ({}: Props) => {
    return (
        <header className="h-10 bg-slate-700">
            <div className="container h-full flex justify-between">
                <div>
                    <Link href="/">
                        <a className={textClasses}>{appName}</a>
                    </Link>
                </div>
                <div></div>
            </div>
        </header>
    );
};

export default Header;

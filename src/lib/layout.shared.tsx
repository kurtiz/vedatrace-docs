import type {BaseLayoutProps} from 'fumadocs-ui/layouts/shared';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
    user: 'kurtiz',
    repo: 'vedatrace-docs',
    branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
    return {
        nav: {
            title: (
                <div className="flex items-center gap-3">
                    <img alt="logo" src="/logo.png" className="size-10"/>
                    <p>Vedatrace</p>
                </div>
            ),
        },
        githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    };
}

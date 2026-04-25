import { StandaloneButton, type StandaloneButtonProps } from '$comps/buttons/StandaloneButton'
import { useNavigation } from '$comps/buttons/useNavigation'
import "$src/TextSizing.css"

type StandaloneLinkButtonProps = {
    externalUrl: string;
} & StandaloneButtonProps

export function StandaloneLinkButton( { externalUrl, ...rest }: StandaloneLinkButtonProps ){
    const nav = useNavigation({ isExternalLink: true, urlPath: externalUrl });

    return <StandaloneButton textClassName="textSmall" {...rest} onClick={nav.onClick} href={nav.href} target={nav.target} />
}

import { StandaloneButton, type StandaloneButtonProps } from '$comps/buttons/StandaloneButton'
import { useNavigation, type INavigable } from '$comps/buttons/useNavigation'
import "$src/TextSizing.css"

type StandaloneLinkButtonProps = StandaloneButtonProps & INavigable

export function StandaloneLinkButton( { urlPath, isExternalLink, ...rest }: StandaloneLinkButtonProps ){
    const nav = useNavigation({ isExternalLink, urlPath });

    return <StandaloneButton textClassName="textSmall" {...rest} onClick={nav.onClick} href={nav.href} target={nav.target} />
}

import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });
        const fighterInfo= createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });
    
    
    
    if (fighter !== undefined) {
        const { name, 
            health,
            attack,
            defense } = fighter
         
        const imgElement = createFighterImage(fighter)
        fighterInfo.innerHTML =
        `name:  ${name} <br> 
        health:  ${health} <br>
        attack:  ${attack}<br>
        defense: ${defense}
        `;
        fighterElement.append(imgElement,fighterInfo);
   }
   
 
    // todo: show fighter info (image, name, health, etc.)
   
 
    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}

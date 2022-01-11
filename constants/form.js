export const dataMarks=[
    {
        value: 'Left Leg',
        field :'leftLeg',
        buttons:['afuera', 'adentro', 'ambas', 'ninguna'],
    },
    {
        value: 'Right Leg',
        field :'rightLeg',
        buttons:['afuera', 'adentro', 'ambas', 'ninguna']
    },
    {
        value: 'Noise',
        field :'noise',
        buttons:['izquierda', 'derecha', 'ambasNaris', 'sinNaris']
    },
]

export const textFieldData = [
    {
        placeholder:'plake',
        multiline: true,
        numberOfLines: 1,
        maxLength: 10,
        keyboardType:"number-pad"
    },
    {
        placeholder:'description',
        multiline: true,
        numberOfLines: 4,
        maxLength: 50,
        keyboardType:'default'
    },
    {
        placeholder:'year',
        multiline: true,
        numberOfLines: 1,
        maxLength: 4,
        keyboardType:'number-pad'
    }
];

export const initalState = {
    leftLeg:'afuera',
    rightLeg:'afuera',
    noise:'izquierda',
    plake: "",
    description: "",
    year: "",
  };
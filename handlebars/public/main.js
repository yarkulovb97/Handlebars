const context = {
  title: 'DRIFT WITH THE LATEST BMW M5!',
  body: 'The F90 M5 is based on the G30 5 Series and uses an all-wheel drive ("xDrive") powertrain, being the first time that an M5 has not been rear-wheel drive.However the all-wheel drive system is biased towards the rear wheels. It can also be configured to send power to the rear wheels only, if the electronic stability control (ESC) is disabled.The transmission is an 8-speed ZF GA8HP75Z automatic.',
  instruments: [
    {
      image: '',
      name: 'DRIFT MODE AND TOP SPEED',
      description: 'The 2018 BMW M5 has been revealed, packing much of what we expected – a redeveloped 4.4-litre V8, tied for the first time to BMW’s xDrive all-wheel-drive system – and some of the things we didn’t, like a clean break away from a dual-clutch gearbox in favour of a quick, smooth eight-speed torque converter automatic.',
      price: '$40,999.00',
      sale: '$38,699.89'
    },
    
  ]
};
/*Notes */
/* Step 1: Select HTML/DOM element that delivers Handlebars template by id */
const templateElement = document.getElementById("templateHB");

/*Step 2: */
//Next we access the specific html element whose content/html markup that we want to use as a template source
const templateSource = templateElement.innerHTML;

/*Step 3: */
//Handlebars.compile() is a built-in method from Handlebars that returns a compiled template(using the templateSource as an argument):
const template = Handlebars.compile(templateSource);

/* Steps 4: */
//This template function will accept an argument(context) and it uses the properties of the object to fill in the Handlebars template.
const compiledHtml = template(context);

/* Step 5: Select HTML element to edit */
document.getElementById('information').innerHTML = compiledHtml;

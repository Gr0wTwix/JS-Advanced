function citiRecord(name,population,treasury) {
    const city = 
    {
       name,
       population,
       treasury,
       taxRate: 10,
       collectTaxes() {
           this.treasury += Math.floor(this.population*this.taxRate);
       },
       applyGrowth(percent) {
        this.population += Math.floor(this.population*percent/100);
       },
       applyRecession(percent) {
           this.this.treasury -= Math.floor(this.treasury*percent/100);
       }
    }; 
    return city;
}
citiRecord('Tortuga',
7000,
15000
);
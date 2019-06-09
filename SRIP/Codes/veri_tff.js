const VCDParser = require('vcd-parser');
VCDParser.parse(
module tff(data,clk,reset,q)
input data,clk,reset;
output q;
reg q;
always @(posedge clk or negedge reset)
begin
if(~reset)
begin
q<=1'b0;
end 
else if(data)
begin
q<=!q;
end
end
endmodule
);

.then(parsedData => {
        console.log(parsedData);
        
    });
    .catch(err => {
        console.error(err);
    });
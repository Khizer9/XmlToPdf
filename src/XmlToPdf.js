import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

function XmlToPdf() {
  const [xmlData, setXmlData] = useState(null);
  

  useEffect(() => {
    // Load XML data when the component mounts
    loadXMLData();
  }, []);

  const loadXMLData = () => {
    // Simulate loading XML data (replace with your data fetching code)
    const sampleXmlData = `
    <NAXML-MovementReport version="3.4">


    <TransmissionHeader>
    
    <StoreLocationID>1022</StoreLocationID>
    
    <VendorName>Gilbarco-VeederRoot</VendorName>
    
    <VendorModelVersion>20.02.27.01B</VendorModelVersion>
    
    </TransmissionHeader>
    
    
    <FuelGradeMovement>
    
    
    <MovementHeader>
    
    <ReportSequenceNumber>1</ReportSequenceNumber>
    
    <PrimaryReportPeriod>2</PrimaryReportPeriod>
    
    <SecondaryReportPeriod>0</SecondaryReportPeriod>
    
    <BusinessDate>2023-09-19</BusinessDate>
    
    <BeginDate>2023-09-19</BeginDate>
    
    <BeginTime>23:35:50</BeginTime>
    
    <EndDate>2023-09-20</EndDate>
    
    <EndTime>23:40:35</EndTime>
    
    </MovementHeader>
    
    
    <FGMDetail>
    
    <FuelGradeID>001</FuelGradeID>
    
    
    <FGMNonResettableTotal>
    
    <FuelGradeNonResettableTotalVolume>1567715.42</FuelGradeNonResettableTotalVolume>
    
    <FuelGradeNonResettableTotalAmount>3861508.6</FuelGradeNonResettableTotalAmount>
    
    </FGMNonResettableTotal>
    
    
    <FGMPriceTierSummary>
    
    <PriceTierCode>0001</PriceTierCode>
    
    
    <FGMSalesTotals>
    
    <FuelGradeSalesVolume>2503.449</FuelGradeSalesVolume>
    
    <FuelGradeSalesAmount>7507.82</FuelGradeSalesAmount>
    
    
    <PumpTestTotals>
    
    <PumpTestAmount>0</PumpTestAmount>
    
    <PumpTestVolume>0</PumpTestVolume>
    
    <ReturnTankID/>
    
    </PumpTestTotals>
    
    <TaxExemptSalesVolume>0</TaxExemptSalesVolume>
    
    <DiscountAmount>0</DiscountAmount>
    
    <DiscountCount>0</DiscountCount>
    
    <DispenserDiscountAmount>-125.91</DispenserDiscountAmount>
    
    <DispenserDiscountCount>77</DispenserDiscountCount>
    
    </FGMSalesTotals>
    
    </FGMPriceTierSummary>
    
    
    <FGMPriceTierSummary>
    
    <PriceTierCode>0002</PriceTierCode>
    
    
    <FGMSalesTotals>
    
    <FuelGradeSalesVolume>1428.532</FuelGradeSalesVolume>
    
    <FuelGradeSalesAmount>4569.88</FuelGradeSalesAmount>
    
    
    <PumpTestTotals>
    
    <PumpTestAmount>0</PumpTestAmount>
    
    <PumpTestVolume>0</PumpTestVolume>
    
    <ReturnTankID/>
    
    </PumpTestTotals>
    
    <TaxExemptSalesVolume>0</TaxExemptSalesVolume>
    
    <DiscountAmount>0</DiscountAmount>
    
    <DiscountCount>0</DiscountCount>
    
    <DispenserDiscountAmount>-45.46</DispenserDiscountAmount>
    
    <DispenserDiscountCount>39</DispenserDiscountCount>
    
    </FGMSalesTotals>
    
    </FGMPriceTierSummary>
    
    </FGMDetail>
    
    
    <FGMDetail>
    
    <FuelGradeID>002</FuelGradeID>
    
    
    <FGMNonResettableTotal>
    
    <FuelGradeNonResettableTotalVolume>115975.21</FuelGradeNonResettableTotalVolume>
    
    <FuelGradeNonResettableTotalAmount>418941.19</FuelGradeNonResettableTotalAmount>
    
    </FGMNonResettableTotal>
    
    
    <FGMPriceTierSummary>
    
    <PriceTierCode>0001</PriceTierCode>
    
    
    <FGMSalesTotals>
    
    <FuelGradeSalesVolume>53.963</FuelGradeSalesVolume>
    
    <FuelGradeSalesAmount>205</FuelGradeSalesAmount>
    
    
    <PumpTestTotals>
    
    <PumpTestAmount>0</PumpTestAmount>
    
    <PumpTestVolume>0</PumpTestVolume>
    
    <ReturnTankID/>
    
    </PumpTestTotals>
    
    <TaxExemptSalesVolume>0</TaxExemptSalesVolume>
    
    <DiscountAmount>0</DiscountAmount>
    
    <DiscountCount>0</DiscountCount>
    
    <DispenserDiscountAmount>0</DispenserDiscountAmount>
    
    <DispenserDiscountCount>0</DispenserDiscountCount>
    
    </FGMSalesTotals>
    
    </FGMPriceTierSummary>
    
    
    <FGMPriceTierSummary>
    
    <PriceTierCode>0002</PriceTierCode>
    
    
    <FGMSalesTotals>
    
    <FuelGradeSalesVolume>127.796</FuelGradeSalesVolume>
    
    <FuelGradeSalesAmount>485.51</FuelGradeSalesAmount>
    
    
    <PumpTestTotals>
    
    <PumpTestAmount>0</PumpTestAmount>
    
    <PumpTestVolume>0</PumpTestVolume>
    
    <ReturnTankID/>
    
    </PumpTestTotals>
    
    <TaxExemptSalesVolume>0</TaxExemptSalesVolume>
    
    <DiscountAmount>0</DiscountAmount>
    
    <DiscountCount>0</DiscountCount>
    
    <DispenserDiscountAmount>-8.49</DispenserDiscountAmount>
    
    <DispenserDiscountCount>4</DispenserDiscountCount>
    
    </FGMSalesTotals>
    
    </FGMPriceTierSummary>
    
    </FGMDetail>
    
    
    <FGMDetail>
    
    <FuelGradeID>003</FuelGradeID>
    
    
    <FGMNonResettableTotal>
    
    <FuelGradeNonResettableTotalVolume>103930.41</FuelGradeNonResettableTotalVolume>
    
    <FuelGradeNonResettableTotalAmount>425148.7</FuelGradeNonResettableTotalAmount>
    
    </FGMNonResettableTotal>
    
    
    <FGMPriceTierSummary>
    
    <PriceTierCode>0001</PriceTierCode>
    
    
    <FGMSalesTotals>
    
    <FuelGradeSalesVolume>28.357</FuelGradeSalesVolume>
    
    <FuelGradeSalesAmount>121.91</FuelGradeSalesAmount>
    
    
    <PumpTestTotals>
    
    <PumpTestAmount>0</PumpTestAmount>
    
    <PumpTestVolume>0</PumpTestVolume>
    
    <ReturnTankID/>
    
    </PumpTestTotals>
    
    <TaxExemptSalesVolume>0</TaxExemptSalesVolume>
    
    <DiscountAmount>0</DiscountAmount>
    
    <DiscountCount>0</DiscountCount>
    
    <DispenserDiscountAmount>-1.91</DispenserDiscountAmount>
    
    <DispenserDiscountCount>2</DispenserDiscountCount>
    
    </FGMSalesTotals>
    
    </FGMPriceTierSummary>
    
    
    <FGMPriceTierSummary>
    
    <PriceTierCode>0002</PriceTierCode>
    
    
    <FGMSalesTotals>
    
    <FuelGradeSalesVolume>112.992</FuelGradeSalesVolume>
    
    <FuelGradeSalesAmount>485.74</FuelGradeSalesAmount>
    
    
    <PumpTestTotals>
    
    <PumpTestAmount>0</PumpTestAmount>
    
    <PumpTestVolume>0</PumpTestVolume>
    
    <ReturnTankID/>
    
    </PumpTestTotals>
    
    <TaxExemptSalesVolume>0</TaxExemptSalesVolume>
    
    <DiscountAmount>0</DiscountAmount>
    
    <DiscountCount>0</DiscountCount>
    
    <DispenserDiscountAmount>-1.89</DispenserDiscountAmount>
    
    <DispenserDiscountCount>3</DispenserDiscountCount>
    
    </FGMSalesTotals>
    
    </FGMPriceTierSummary>
    
    </FGMDetail>
    
    
    <FGMDetail>
    
    <FuelGradeID>004</FuelGradeID>
    
    
    <FGMNonResettableTotal>
    
    <FuelGradeNonResettableTotalVolume>99792.62</FuelGradeNonResettableTotalVolume>
    
    <FuelGradeNonResettableTotalAmount>369160.21</FuelGradeNonResettableTotalAmount>
    
    </FGMNonResettableTotal>
    
    
    <FGMPriceTierSummary>
    
    <PriceTierCode>0001</PriceTierCode>
    
    
    <FGMSalesTotals>
    
    <FuelGradeSalesVolume>59.226</FuelGradeSalesVolume>
    
    <FuelGradeSalesAmount>225</FuelGradeSalesAmount>
    
    
    <PumpTestTotals>
    
    <PumpTestAmount>0</PumpTestAmount>
    
    <PumpTestVolume>0</PumpTestVolume>
    
    <ReturnTankID/>
    
    </PumpTestTotals>
    
    <TaxExemptSalesVolume>0</TaxExemptSalesVolume>
    
    <DiscountAmount>0</DiscountAmount>
    
    <DiscountCount>0</DiscountCount>
    
    <DispenserDiscountAmount>0</DispenserDiscountAmount>
    
    <DispenserDiscountCount>0</DispenserDiscountCount>
    
    </FGMSalesTotals>
    
    </FGMPriceTierSummary>
    
    
    <FGMPriceTierSummary>
    
    <PriceTierCode>0002</PriceTierCode>
    
    
    <FGMSalesTotals>
    
    <FuelGradeSalesVolume>509.779</FuelGradeSalesVolume>
    
    <FuelGradeSalesAmount>1936.66</FuelGradeSalesAmount>
    
    
    <PumpTestTotals>
    
    <PumpTestAmount>0</PumpTestAmount>
    
    <PumpTestVolume>0</PumpTestVolume>
    
    <ReturnTankID/>
    
    </PumpTestTotals>
    
    <TaxExemptSalesVolume>0</TaxExemptSalesVolume>
    
    <DiscountAmount>0</DiscountAmount>
    
    <DiscountCount>0</DiscountCount>
    
    <DispenserDiscountAmount>-24.17</DispenserDiscountAmount>
    
    <DispenserDiscountCount>12</DispenserDiscountCount>
    
    </FGMSalesTotals>
    
    </FGMPriceTierSummary>
    
    </FGMDetail>
    
    </FuelGradeMovement>
    
    </NAXML-MovementReport>
    `;

    setXmlData(sampleXmlData);
  };

  const generatePDF = () => {
    if (!xmlData) {
      alert("XML data not loaded yet. Please wait.");
      return;
    }

    const doc = new jsPDF({
        orientation: "landscape",
    });

    const content = {
      startY: 60,
      head: [
        ["Fuel Grade ID", "Volume", "Amount", "Price Tier", "Sales Volume", "Sales Amount", "Pump Test Amount", "Pump Test Volume", "Return Tank ID", "Tax Exempt Sales", "Discount Amount", "Discount Count", "Dispenser Discount Amount", "Dispenser Discount Count"],
      ],
      body: [], // This will be populated with data
    };

    // Parse the XML data
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlData, "text/xml");

    const storeLocationID = xmlDoc.querySelector("StoreLocationID").textContent;
    const vendorName = xmlDoc.querySelector("VendorName").textContent;
    const vendorModelVersion = xmlDoc.querySelector("VendorModelVersion").textContent;
  
    // Add title and related content
    doc.setFontSize(16);
    doc.text("Fuel Grade Report", 10, 15); // Title
    doc.setFontSize(12);
    doc.text(`Store Location ID: ${storeLocationID}`, 10, 25); // Store Location ID
    doc.text(`Vendor Name: ${vendorName}`, 10, 35); // Vendor Name
    doc.text(`Vendor Model Version: ${vendorModelVersion}`, 10, 45);

    // Populate the content.body with data from your XML
    const fuelGradeElements = xmlDoc.querySelectorAll("FuelGradeMovement FGMDetail");
    fuelGradeElements.forEach(function (fuelGradeElement) {
      const rowData = [
        fuelGradeElement.querySelector("FuelGradeID").textContent,
        fuelGradeElement.querySelector("FuelGradeNonResettableTotalVolume").textContent,
        fuelGradeElement.querySelector("FuelGradeNonResettableTotalAmount").textContent,
        fuelGradeElement.querySelector("FGMPriceTierSummary PriceTierCode").textContent,
              fuelGradeElement.querySelector("FuelGradeSalesVolume").textContent,
                fuelGradeElement.querySelector("FuelGradeSalesAmount").textContent,
                fuelGradeElement.querySelector("PumpTestAmount").textContent,
                fuelGradeElement.querySelector("PumpTestVolume").textContent,
                fuelGradeElement.querySelector("PumpTestTotals ReturnTankID").textContent,
                fuelGradeElement.querySelector("TaxExemptSalesVolume").textContent,
                fuelGradeElement.querySelector("DiscountAmount").textContent,
                fuelGradeElement.querySelector("DiscountCount").textContent,
                fuelGradeElement.querySelector("DispenserDiscountAmount").textContent,
                fuelGradeElement.querySelector("DispenserDiscountCount").textContent
        // Add more fields here
      ];

      content.body.push(rowData);
    });

    // Generate the PDF table using autoTable
    doc.autoTable({
      head: content.head,
      body: content.body,
      startY: content.startY,
      styles: { fontSize: 10, cellPadding: 1.5 },
      theme: "grid",
    });

    // Save the PDF
    doc.save("fuel_grade_report.pdf");
  };

  return (
    <div>
      <h1>XML to PDF Conversion</h1>
      <button onClick={generatePDF}>Generate PDF</button>
    </div>
  );
}

export default XmlToPdf;

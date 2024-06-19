# Addressing UHI Effects in Arizona through Strategic Urban Greening using AI-Driven Semantic Segmentation of Satellite Imagery

![Cooling Intensity Equation](Images/workflow.png){: width="40"}



## Introduction

This project explores the application of deep learning techniques, specifically U-Net-based semantic segmentation models, to identify the most optimal sites in urban areas for afforestation to mitigate Urban Heat Island (UHI) effects. The study focuses on urban areas of Arizona, USA, leveraging high-resolution NAIP satellite imagery.

## Problem Statement

Urban Heat Island (UHI) effects pose significant environmental challenges, including:

- Elevated temperatures in urban areas
- Increased energy consumption for cooling
- Degradation of environmental quality

Existing approaches to identifying suitable lands for afforestation are time-consuming and inaccurate. Additionally, rapid urbanization and high land costs limit the availability of potential green spaces.

## Approach

Our approach combines advanced image processing techniques with environmental science to strategically select optimal sites for urban mini forests, enhancing urban sustainability and improving environmental quality.

1. **Vacant Land Identification**: Employ U-Net architectures for high-precision semantic segmentation to detect vacant urban lands from satellite imagery.
2. **Optimal Site Selection**: Develop a sophisticated algorithm that considers land temperature profiles and population density to prioritize afforestation in areas where it would provide maximum environmental relief and human benefit.

## Implementation

### Data Collection

- **High-resolution Imagery Data**: 1m resolution RGB imagery from the National Agriculture Imagery Program (NAIP), accessed via Google Earth Engine.
- **Land Surface Temperature Data**: Thermal band (ST B10) data from Landsat 9 satellite, with a resolution of 10 meters per pixel.
- **Population Density Data**: 100m resolution data from the WorldPop Global Project Population Data.

### Vacant Land Identification

- **Dataset**: 500 patches derived from manually annotated 1m resolution NAIP satellite imagery from Gilbert city, classified as 'vacant' or 'occupied'.
- **Model Architecture**: U-Net with contracting path for context capture and symmetric expanding path for precise localization, includes skip connections for effective feature propagation.
- **Model Variants**: U-Net1 with ~50,000 parameters and U-Net2 with ~4 million parameters.
- **Data Augmentation**: Rotations, width and height shifts, and horizontal and vertical flips for improved generalizability.
- **Evaluation Metric**: Intersection over Union (IoU) for the 'vacant' class.

### Cooling Intensity Model

The cooling intensity (CI) is modeled as a function of the local surface temperature (x), the size of the urban forest (S), and the distance from the forest (d):

![Cooling Intensity Equation](https://i.imgur.com/RuPSUeB.png)

This equation approximates the cooling effect within the urban forest and how it decays with increasing distance from the forest's edge.

### Site Selection Algorithm

- **Input**: Land cover, heat, and population density maps.
- **Output**: Updated heat map and selected vacant lands for urban forests.
- **Workflow**:
  1. Initialize data, score, and select lands.
  2. Apply the cooling model to simulate temperature reductions.
  3. Update maps iteratively.
- **Scoring**: Prioritize vacant lands with the highest score, defined as the product of the mean temperature and population density within 900 meters.

## Results

- **Model Performance**: The complex U-Net variant achieved an IoU of 84.6%, and the simpler version achieved 79.7% for the 'vacant' class.
- **Practical Application**: On average, 92% of vacant lands were correctly identified across the cities of Mesa, Phoenix, and Paradise Valley.
- **Impact on UHI Mitigation**: The algorithm-based approach resulted in a 53% higher cooling effect and impacted 43% more people compared to random allocation of urban forests.

## Future Aspects

- Real-Time Data Integration: Explore real-time monitoring for adaptive response in urban forest planning.
- Algorithm Enhancement: Develop advanced algorithms incorporating more environmental variables for precision.
- Broader Application: Extend research to additional cities and climates to refine and universalize the model.

## Discussion

This study validates the strategic placement of urban mini forests for maximizing cooling effects and community benefits. It demonstrates efficient resource management and space optimization in urban environments. However, the high incorrect identification rate in Phoenix highlights the need for city-level stratification and model adaptation.

## References

[1] Environmental Protection Agency (EPA), "Reduce Urban Heat Island Effect," [Online]. Available: https://www.epa.gov/green-infrastructure/reduce-urban-heat-island-effect. [Accessed: April 20, 2024].

[2] O. Ronneberger, P. Fischer, and T. Brox, "U-Net: Convolutional Networks for Biomedical Image Segmentation," arXiv preprint arXiv:1505.04597, 2015. [Online]. Available: https://arxiv.org/abs/1505.04597. [Accessed: April 20, 2024].

[3] USDA National Agriculture Imagery Program, "NAIP - USDA Aerial Imagery," [Online]. Available: https://naip-usdaonline.hub.arcgis.com. [Accessed: April 20, 2024].

[4] I. Gallay, B. Olah, V. Murtinová, and Z. Gallayová, "Quantification of the Cooling Effect and Cooling Distance of Urban Green Spaces Based on Their Vegetation Structure and Size as a Basis for Management Tools for Mitigating Urban Climate," Sustainability, vol. 15, no. 4, p. 3705, 2023. [Online]. Available: https://www.mdpi.com/2071-1050/15/4/3705. [Accessed: April 20, 2024].

[5] L. Mao, Z. Zheng, X. Meng, Y. Zhou, P. Zhao, Z. Yang, and Y. Long, "Large-scale automatic identification of urban vacant land using semantic segmentation of high-resolution remote sensing images," ISPRS Journal of Photogrammetry and Remote Sensing, vol. 185, pp. 98-111, 2022. [Online]. Available: https://www.sciencedirect.com/science/article/abs/pii/S0169204622000330. [Accessed: April 20, 2024].

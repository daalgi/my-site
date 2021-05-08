# Cable-stayed bridge

The thesis of my master's degree in civil engineering consisted in a parametric study, design and calculation of a cable-stayed bridge, which passed over the Jucar River, in Carcaixent (Valencia, Spain).

The total length of the bridge was 165.5 m and a main span of 130 m. After evaluating the most feasible structural systems, a 2-span cable-stayed bridge with one tower was chosen as the most suitable solution.

When I started to dig into the structural system of the cable-stayed bridges I found that there were several key parameters influencing its global (non-linear) behaviour. Although in the specialized literature you could find recommendations for the design of this type of structures, normally they referred to bridges with two towers. So instead of extrapolating those recommendations, which by the way would have saved me quite a few months of work, and given that I enjoy the process of solving problems and building tools to do it, I chose to perform multiple parametric studies and find some rules that would help me to decide the what an appropriate final design would be.

It's important to mention that I self-developed all the tools used for the verification of the structural safety of the bridge. Well, all but the finite element software (that it'd have been a bit too much).

## Global system

I started by developing a script to parametrize the generation of finite element models for the global system in `ANSYS APDL` (Ansys Parametric Design Language), which uses the `Fortran` syntax. The models would contain beam-like elements to study the global behavior. The script would perform three main steps for each model:
1. Model the bridge as a continuous beam with supports at the anchorages to estimate the needed preload and the maximum tensile forces.
2. Select the needed cables within a catalogue.
3. Model the complete bridge (deck, tower, and stays) and apply different load cases.
4. Post-process the internal stress distributions.

![Global FEM](010-global-fem.gif)

Once the script was ready, I started studying how different parameters influenced the stress distributions in the structural elements, the needed weight and volume of materials, and, of course, the cost. I analyzed multiple parameters like the number of tendons, the stiffness of the deck and the tower, the inclination of the tower, the ratio between the tower height and the main span or different ratios between the anchorages distances. Then, with a dataset of several hundred bridges and the analysis made, I had a much deeper understanding of what was going to work better. Now I was in a much better position to decide what the bridge would look like.

The final solution had a main span of 130 m. The load was carried by 8 stay cables to the 59.7-m-height tower, which was restrained by the 8 back stay cables anchored to the 35.5-m side span and to the abutment.

![General view](011-general-view.gif)

When global system key parameters were set, it was time to design the details:
- Deck
- Tower
- Anchorages

Also, given the non-linearity of the system introduced by the tendons, the superposition principle was not applicable for the main loads, that is, the traffic loads. The rest of the loads (wind, concrete shrinkage, temperature increments, ...) had a less important influence, so the superposition principle was considered to be still valid. Then, in order to obtain the stresses envelope the model ended up with over 150 traffic load cases, which were combined with the rest of the loads. Those load combinations were too cumbersome to make manually, so I developed a macro in `VBA` that would do it automatically for each iteration during the design process.

![Live loads application](012-live-loads.gif)

## Deck

The deck was a composite steel box-girder with a concrete slab at the top. I developed a spreadsheet to conveniently verify all the relevant limit states in all the sections of the deck. Additionally, I developed a module in `VBA` to perform some of the more complex calculations such as the ultimate axial force-bending moment diagram for each section.

![Composite deck ULS N-M diagram](020-deck-NMdiagram.gif)

Additionally, I made a new script in `ANSYS APDL` to parametrize a local model of the deck with shell elements for the concrete slab and steel girder, and beam elements for the diagonals to stiffen the section. The goal was to find a configuration that would minimize the quantity of materials, including the slab reinforcement, and fulfill the corresponding limit states.

![Deck local FEM](021-deck-fem.png)

Eventually, the deck two main cross-sections can be seen in the following figure.

![Composite deck cross-sections](022-deck-sections.gif)

## Tower

The 60-m reinforced concrete tower was also verified using self-developed tools implemented in spreadsheets and `VBA`.

![Tower](030-tower.gif)

## Anchorages

The tendons' anchorages were designed by means of steel plates connected to the deck and tower. These elements were analyzed with local finite element models using non-linear materials and taking into account the geometric nonlinearities. Again, the models were parametrized using `ANSYS APDL`.

![Anchorage in the deck](040-anchorage-deck.png)

![Anchorage in the tower](041-anchorage-tower.png)

## Construction process

Lastly, the deck structural safety was verified during the construction process. In order to control the deflections and internal stresses, the needed preload in the tendons was determined at every step of the assembly of the bridge.

![Construction process](050-cp.gif)
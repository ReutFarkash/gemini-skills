# Mermaid standards for Conversation Flow (v3.3 Architect Refined)

## Visual Taxonomy (v2.5 Standard)
- **Checkpoints (Double Circle):** `NodeID(("Label <a href='...'>🏷️</a>")):::checkpoint`
- **Decisions (Rhombus):** `NodeID{"Label <a href='...'>🐙</a>"}`
- **Research (Hexagon):** `NodeID{{"Label <a href='...'>§</a>"}}`
- **Implementation (Rectangle):** `NodeID["Label <a href='...'>🐙</a>"]`
- **Detours/Bugs (Stadium):** `NodeID(["Label <a href='...'>🐞</a>"]):::detour`

## Golden Rules for Syntax
1. **Labels:** Must ALWAYS be wrapped in double quotes (e.g., `NodeID("Label")`). 
   - **CRITICAL:** Do NOT use backslashes to escape these quotes.
   - **❌ WRONG:** `NodeID("\"Label\"")`
   - **✅ RIGHT:** `NodeID("Label")`
2. **HTML Links:** Use `<a href='...'>§</a>` or `<a class='internal-link' href='...'>🏷️</a>`. Use single quotes for HTML attributes inside the label's double quotes.
   - **❌ WRONG:** `<a href=\"...\">`
   - **✅ RIGHT:** `<a href='...'>`
3. **No Leading Numbers:** Labels must not start with numbers (e.g., use "Phase 1" instead of "1.").
4. **Escaping:** Triple-escape backticks (```code```) when used inside node labels.

## Validated Styling Block
```mermaid
    classDef research fill:#d1ecf1,stroke:#0c5460;
    classDef implementation fill:#d4edda,stroke:#155724;
    classDef decision fill:#fff3cd,stroke:#856404;
    classDef fail fill:#f8d7da,stroke:#721c24;
    classDef detour stroke-dasharray: 5 5, fill:#fff0f0, stroke:#721c24;
    classDef checkpoint fill:#e2d1f9,stroke:#5a2ca5;
```

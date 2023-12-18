## Endpoints

- `GET` `/` accepts a json object with a field called `geneNames` (the codes of the genes of which you want to fetch)
  - example body:
  ```json
  {
    "geneNames": ["Gm5434", "Col6a2", "Col6a2"]
  }
  ```
  - Returns:
    - `code:200` and an array of `results` in case all gene names were found
    - `code:404` and two arrays, one for `results` found, and one for `missings` (not found)
    - `code:400|500` and an error object if the request body isn't set properly
- `GET` `/:geneName` accepts a single string as `geneName` in the url to fetch a Gene Expression Values

  - example body:

  ```string
    GET  http://x.xyz.com/Rassf3
  ```

  - Query params:
    - `withStats=true`: returns statistics instead of the Gene object itself.
    - `withOutliers=true`: returns and array of outliers in a Gene's expression values (does nothing on it's own, needs to be sent with
      `withStats`)
  - Returns:
    - `code:200` and a Gene Object `results` in case gene name was found.
    - `code:404` in case it wasn't found
    - `code:400|500` if the query params or the request has erros
  - example returns:

  ```json
  GET  http://x.xyz.com/Rassf3

    "results": {
        "_id": "658049b943815a6df1013c8e",
        "gene": "Rassf3",
        "transcript": "uc007hfs.1",
        "exper_rep1": 1069,
        "exper_rep2": 1072.46,
        "exper_rep3": 541.1,
        "control_rep1": 2012.42,
        "control_rep2": 1104.76,
        "control_rep3": 1549.48,
        "__v": 0
    }

    GET  http://x.xyz.com/Rassf3?withStats=true

     "results": {
        "mean": 1224.87,
        "meadian": 1088.6100000000001,
        "variance": 209183.12410000002
    }

    GET http://x.xyz.com/Rassf3?withStats=true&withOutliers=true

    "results": {
        "mean": 1224.87,
        "meadian": 1088.6100000000001,
        "variance": 209183.12410000002,
        "outliers": []
    }

  ```

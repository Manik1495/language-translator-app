import os
import json

def write_list_to_file(data_list, filename):
    # Create the data folder if it doesn't exist
    if not os.path.exists('data'):
        os.makedirs('data')

    # Open the file in write mode
    with open(f'data/{filename}', 'w') as f:
        # Write the list to the file
        for item in data_list:
            if item.endswith('\n'):
                f.write(item)
            else:
                f.write(item + '\n')

# Example usage
# data_list = ["Item 1", "Item 2", "Item 3", "Item 5", "Item 7"]
# write_list_to_file(data_list, 'output.txt')


# Read the output.txt file into a list
def read_file_to_list(filename):
    with open(filename, 'r') as f:
        output_list = f.read().splitlines()
    return output_list

# Example usage
# output_list = read_file_to_list('data/output.txt')
# print(output_list)


# def txt_to_json(input_file, output_file):
#     with open(input_file, 'r') as file:
#         lines = file.readlines()

#     data = {}
#     for i, line in enumerate(lines, start=1):
#         data[i] = line.strip()

#     with open(output_file, 'w') as file:
#         json.dump(data, file, indent=4)

# # Example usage
# txt_to_json('data/output.txt', 'data/output.json')

import json

def txt_to_json(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as file:
        lines = file.readlines()

    data = {}
    for i, line in enumerate(lines, start=0):
        data[i] = line.strip()

    with open(output_file, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)

# Example usage
txt_to_json('data/output-data-en.txt', 'data/output-data-en.json')





def store_list_in_file(file_path, data_list):
    try:
        # Open the file in write mode (overwriting existing content or creating a new file)
        with open(file_path, 'w') as file:
            # Write each item in the list to the file
            for item in data_list:
                file.write(str(item) + '\n')

        print(f"List has been stored in the file: {file_path}")

    except Exception as e:
        print(f"An error occurred: {e}")

# Example usage:
# data_list = ['Item 1', 'Item 2', 'Item 3']
# file_path = 'output.txt'

# store_list_in_file(file_path, data_list)